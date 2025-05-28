import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex-card.component.html',
})
export class PokedexCardComponent {
  @Input() name!: string;
  @Input() id!: number;
}
