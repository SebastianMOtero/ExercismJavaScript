//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class GradeSchool {
  constructor() {
      this.school = {}
  }

  roster() {
      var result = {}
      for (var k in this.school){
          result[k] = Object.assign([], this.school[k])
      }
      return result
  }

  add(name, grade) {
      var students = this.school[grade]
      if (!students){
        students = []
          this.school[grade] = students
      }
      students.push(name)
      students.sort()
  }

  grade(grade) {
      let students = this.school[grade]
      return (students != null)? Object.assign([], students) : []
  }
}