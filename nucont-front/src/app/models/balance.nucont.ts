export class Balance {
  public _id: any;
  public description: String; // <- Initializing
  public classifier: String; // <- Initializing
  public openingBalance: Number;
  public debit: Number;
  public credit: Number;
  public finalBalance: Number;
  public parent: any;

  constructor(
      _id: any, 
      description: String, 
      classifier: String, 
      openingBalance: Number,
      debit: Number,
      credit: Number,
      finalBalance: Number,
      parent: any
    ){
      this._id = _id;
      this.description = description;
      this.classifier = classifier;
      this.openingBalance = openingBalance;
      this.debit = debit;
      this.credit = credit;
      this.finalBalance = finalBalance;
      this.parent = parent;
  }
}
