import axios from 'axios';

class LessonServiceClient {
  private readonly url: string;

  constructor() {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  // tslint:disable-next-line:typedef
  public findModulesForCourse(mid: string, cb) {
    return axios.get(this.url + '/modules/' + mid + '/lessons').then(cb);
  }
}
export default LessonServiceClient;
