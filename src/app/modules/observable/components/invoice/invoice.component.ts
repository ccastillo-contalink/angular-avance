import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { concat,forkJoin, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Client, Invoice, InvoiceLine } from 'src/app/model';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  client: Client;
  lines: InvoiceLine[] = [];

  invoice$: Observable<any>;

  constructor(private invoiceService: InvoiceService) {

  }

  ngOnInit() {

    this.loadInfoAsyncrinic7();
    this.invoice$ = this.getObservable('1111-1111-1111');

    this.invoice$.subscribe(invoice=> {
    })


  }


  public loadInfoAsyncrinic1() {

    this.invoiceService.getInvoiceByDocumentNoPromise('1').then(invoice => { this.invoice = invoice; });
    this.invoiceService.getClientObservable('10').subscribe(invoice => { this.client = invoice; })


  }


  public loadInfoAsyncrinic2() {

    this.invoiceService.getInvoiceByDocumentNoPromise('1').then(invoice => { this.invoice = invoice; });
    this.invoiceService.getClientObservable('10').toPromise().then(client => { this.client = client; })


  }



  public loadInfoAsyncrinic3() {

    this.invoiceService.getInvoiceByDocumentNoPromise('1').then(invoice => { this.invoice = invoice; });
    this.invoiceService.getClientObservable(this.invoice.client_id).toPromise().then(client => { this.client = client; })


  }


  async loadInfoAsyncrinic4() {

    this.invoice = await this.invoiceService.getInvoiceByDocumentNoPromise('1');
    this.client = await this.invoiceService.getClientObservable(this.invoice.client_id).toPromise();


  }

  async loadInfoAsyncrinic5() {

    this.invoice = await this.invoiceService.getInvoiceByDocumentNoPromise('1');
    this.client = await this.invoiceService.getClientObservable(this.invoice.client_id).toPromise();
    this.lines = await this.invoiceService.getInvoiceLinesPromise(this.invoice.id);
  }

  async loadInfoAsyncrinic6() {

    this.invoice = await this.invoiceService.getInvoiceByDocumentNoPromise('1');
    this.invoiceService.getClientObservable(this.invoice.client_id).toPromise().then(client => { this.client = client; })
    this.invoiceService.getInvoiceLinesPromise(this.invoice.id).then(lines => { this.lines = lines; })
  }



  async loadInfoAsyncrinic7() {

    this.invoice = await this.invoiceService.getInvoiceByDocumentNoPromise('1');

    let promiseCLient: Promise<Client> = this.invoiceService.getClientObservable(this.invoice.client_id).toPromise();
    let promiseLines: Promise<InvoiceLine[]> = this.invoiceService.getInvoiceLinesPromise(this.invoice.id);
    let dataInvoice = await Promise.all([promiseCLient, promiseLines]);
    this.client = dataInvoice[0];
    this.lines = dataInvoice[1];


  }


  //forkJoin vs concat

  getObservable(document_no: string): Observable<any> {

    let invoice$: Observable<Invoice> = this.invoiceService.getInvoiceByDocumentNoObservable(document_no);

    return invoice$.pipe(
      mergeMap(invoice => {


      

        let data$ = forkJoin(this.invoiceService.getClientObservable(invoice.client_id), this.invoiceService.getInvoicesLinesObservable(invoice.id))
        .pipe(
          map(info => {

            invoice['client'] = info[0];
            invoice['lines'] = info[1];

            return invoice;
          }
          ))

        return data$;
      })
    );


  }








}
