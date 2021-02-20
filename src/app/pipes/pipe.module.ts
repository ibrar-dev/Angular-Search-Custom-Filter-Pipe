import { DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchPipe } from "./search.pipe";

@NgModule({
  imports: [],
  declarations: [SearchPipe],
  exports: [SearchPipe],
  providers: [DecimalPipe]
})
export class PipeModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: []
    };
  }
}
