export interface InvoiceLine {
    id: string;
    line_no: number;
    description: string;
    quantity:number;
    unit_price: number;
    amount: number;
    invoice_id: string;
}
