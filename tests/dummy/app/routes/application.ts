import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { QueryParamsService } from 'ember-query-params-service';

export default class ApplicationRoute extends Route {
  @service('query-params') qp!: QueryParamsService;

  model() {
    console.log('model');
    return {
      QPs: JSON.stringify(this.qp.current),
    };
  }
}
