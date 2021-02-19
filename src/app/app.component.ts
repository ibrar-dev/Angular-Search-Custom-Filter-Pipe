import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = "Angular " + VERSION.major;
  searchText: string;
  studentData = [
    { name: "John", Age: 34, subject: "computer" },
    { name: "Tom", Age: 28, subject: "Chemistry" },
    { name: "Smith", Age: 24, subject: "Biology" },
    { name: "Craig Hubbard", Age: 20, subject: "Math" },
    { name: "Algernon Jarvis", Age: 28, subject: "Physics" }
  ];
}
