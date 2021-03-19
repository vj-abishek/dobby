export class CourseList {
  allCourses = null;
  CourseFetchURl =
    'https://corsanywhere.herokuapp.com/http://3.7.93.62/guvi2.0/model/courseFetch.php';

  // fetch courses
  async fetch() {
    if (this.allCourses) return;

    const responose = await fetch(this.CourseFetchURl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requestType: 'onload', authtoken: null }),
    });

    const data = await responose.json();
    this.allCourses = JSON.parse(JSON.parse(data.allCourses));
    this.rating = JSON.parse(JSON.parse(data.rating));
  }

  async search(text) {
    await this.fetch();

    let courseCount = 0;
    let topFiveCourse = [];

    for (let rating in this.rating) {
      if (this.rating[rating].rating >= 4) {
        const singleCourse = this.allCourses.paid.find(
          (e) => e.ckey === rating
        );
        if (singleCourse) topFiveCourse.push(singleCourse);
        courseCount++;
      }

      if (courseCount === 10) {
        break;
      }
    }

    return topFiveCourse;
  }
}
