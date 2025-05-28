import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'extractId' })
export class ExtractIdPipe implements PipeTransform {
  transform(url: string): number {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? +match[1] : 0;
  }
}
