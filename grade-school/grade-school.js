
export class GradeSchool {
  constructor(){
    this.students = {};
  }
  
  roster() {
    return JSON.parse(JSON.stringify(this.students))
    // return console.log(JSON.parse(JSON.stringify(this.students)))
  }

  add(name, grade) {
    if( grade in this.students){
      this.students[grade].push(name);
      this.students[grade].sort();
    }else{
      this.students[grade] = [name];
    }
  }

  grade(num) {
    if( !(num in this.students) ) return [];
    return [...this.students[num]]
  }
}
