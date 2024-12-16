
import { Directive, ElementRef, HostListener } from "@angular/core";

// 2:כל קומפוננטה היא דיקטיב מורחב המכיל גם קטע הטמ"ל לחזרה
@Directive({
  selector: '[appChangelook]'
})
export class ChangelookDirective{
// בשלב ראשון נגדיר בקונסטרקטור את האלמנט שעליו אנו עובדות
  constructor(public el:ElementRef) { }
//אירוע
@HostListener('click') h(){
  this.el.nativeElement.innerHTML="אין פרטים זמינים"
}
}
