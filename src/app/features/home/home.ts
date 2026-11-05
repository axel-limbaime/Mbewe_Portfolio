import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const context = gsap.context(() => {
        gsap.from('[data-hero-reveal]', {
          y: 22,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
        gsap.from('.hero__portrait', {
          y: 24,
          opacity: 0,
          scale: 0.96,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }, this.host.nativeElement);

      this.destroyRef.onDestroy(() => context.revert());
    });
  }
}
