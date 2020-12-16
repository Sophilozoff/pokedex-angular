import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
        this.setHeight();
    }
    private initialColor: string = "#f5f5f5";
    private defaultColor: string = "#009688";
    private defaultHeight: number = 180;

    @Input('pkmnBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight() {
        this.el.nativeElement.style.height = this.defaultHeight + 'px';
    }
}   