import {
  AfterViewInit,
  Directive,
  ElementRef,
  Injector,
  Renderer2,
  effect,
  inject,
} from '@angular/core';
import { FormService } from '@pokemon-card-maker/form';

@Directive({
  selector: '[pokemonCardMakerResizeText]',
  standalone: true,
})
export class ResizeTextDirective implements AfterViewInit {
  element = inject(ElementRef);
  renderer = inject(Renderer2);
  formService = inject(FormService);
  injector = inject(Injector);
  lastTextWidth = 0;
  ngAfterViewInit() {
    setTimeout(() => this.adjustFontSize(), 0);
    this.listenToChanges();
  }

  listenToChanges() {
    effect(
      () => {
        this.formService.formState.name();
        this.adjustFontSize();
      },
      { injector: this.injector }
    );
  }

  adjustFontSize() {
    const element = this.element.nativeElement;
    const h1Width = element.clientWidth;
    const text = element.outerText;
    const font = window.getComputedStyle(element).font;
    const textWidth = this.getTextWidth(text, font);
    let currentFontSize = parseInt(font.split(' ')[0]);
    const fontSizeIncrement = 0.1;
    const maxFontSize = 24;

    if (textWidth > h1Width && this.lastTextWidth < textWidth) {
      while (
        this.getTextWidth(
          element.outerText,
          window.getComputedStyle(element).font
        ) > h1Width &&
        currentFontSize > 0
      ) {
        currentFontSize -= fontSizeIncrement;
        this.renderer.setStyle(element, 'font-size', `${currentFontSize}px`);
      }
    } else if (textWidth < this.lastTextWidth && textWidth < h1Width) {
      while (currentFontSize < maxFontSize) {
        currentFontSize += fontSizeIncrement;
        this.renderer.setStyle(element, 'font-size', `${currentFontSize}px`);
        if (
          this.getTextWidth(
            element.outerText,
            window.getComputedStyle(element).font
          ) > h1Width
        ) {
          this.renderer.setStyle(
            element,
            'font-size',
            `${currentFontSize - fontSizeIncrement}px`
          );
          break;
        }
      }
    } else if (textWidth > h1Width) {
      while (
        this.getTextWidth(
          element.outerText,
          window.getComputedStyle(element).font
        ) > h1Width &&
        currentFontSize > 0
      ) {
        currentFontSize -= fontSizeIncrement;
        this.renderer.setStyle(element, 'font-size', `${currentFontSize}px`);
      }
    }

    this.lastTextWidth = textWidth;
  }

  private getTextWidth(text: string, font: string): number {
    const span = this.renderer.createElement('span');
    this.renderer.appendChild(document.body, span);

    this.renderer.setStyle(span, 'font', font);
    this.renderer.setStyle(span, 'whiteSpace', 'nowrap');
    this.renderer.setStyle(span, 'visibility', 'hidden');
    this.renderer.setProperty(span, 'textContent', text);

    const width = span.offsetWidth;

    this.renderer.removeChild(document.body, span);

    return width;
  }
}
