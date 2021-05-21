export class Matrix {
  constructor(string) {
    this.row = string.split('\n').map((row)=>{
      let splitResult = row.split(' ');
      return splitResult.map((number)=>{
        return +number;
      });
    });
  }

  get rows() {
    return this.row;
  }

  get columns() {
    const colums = []

    for (let i = 0; i <= this.rows.length; i++) {
      colums[i] = this.rows.map((row) => {
        return row[i];
      })
    }
    return colums;
  }
}
