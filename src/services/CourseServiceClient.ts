import axios from 'axios';

class CourseServiceClient {
  private readonly url: string;

  constructor() {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  public findAllCourses(cb): void {
    axios.get(this.url + '/courses').then(cb);
  }

  public findCourseById(cid: string, cb): void {
    return;
    // return axios.get(this.url + '/courses/' + cid);
  }
}

export default CourseServiceClient;
