import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Invoice, Client, InvoiceLine } from '../../../model';
import {delay} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = {
    id: '1',
    client_id: '10',
    status: 'Paid',
    issue_date: '2021-01-01',
    document_no: '1111-1111-1111'
  };


  private client: Client = {
    id: '10',
    name: 'Alex Doe',
    street: 'Benito Juarez',
    country: 'Mexico',
    state: 'Chihuahua',
    phone: '6562-122-123',
    city: 'Ciudad Juarez'
   
  };

  private lines: InvoiceLine[]= [{
    id: '1',
    invoice_id: '1',
    line_no: 1,
    unit_price: 12,
    amount: 12,
    quantity: 1,
    description: 'Producto 1'    
  },{
    id: '2',
    invoice_id: '1',
    line_no: 2,
    unit_price: 32,
    amount: 12,
    quantity: 3,
    description: 'Producto 2'    
  },{
    id: '3',
    invoice_id: '1',
    line_no: 3,
    unit_price: 12,
    amount: 12,
    quantity: 1,
    description: 'Producto 3'    
  },{
    id: '4',
    invoice_id: '1',
    line_no: 4,
    unit_price: 12,
    amount: 48,
    quantity: 4,
    description: 'Producto 4'    
  },{
    id: '1',
    invoice_id: '1',
    line_no: 1,
    unit_price: 12,
    amount: 24,
    quantity: 2,
    description: 'Producto 5'    
  }]

  constructor() {

  }

  public getInvoiceByDocumentNoPromise(document_no: string): Promise<Invoice> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.invoice);
      }, 500)
    })

  }

  public getInvoiceByDocumentNoObservable(document_no: string): Observable<Invoice>{

    return of(this.invoice).pipe(delay(500));

  }


  public getClientPromise(id: string): Promise<Client> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.client);
      }, 600)
    })

  }

  public getClientObservable(id: string): Observable<Client>{

    return of(this.client).pipe(delay(3000));

  }


  public getInvoiceLinesPromise(invoice_id: string): Promise<InvoiceLine[]> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.lines);
      }, 500)
    })

  }

 

  public getInvoicesLinesObservable(invoice_id: string): Observable<InvoiceLine[]>{

    return of(this.lines).pipe(delay(3000));

  }
}
