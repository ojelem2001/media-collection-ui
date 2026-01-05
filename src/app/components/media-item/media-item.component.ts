import { Component, Input } from '@angular/core';
import { IMedia, IMediaPlatform, AggregatorType, MediaType } from '../../models';

@Component({
  selector: 'app-media-item',
  standalone: false,
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() media!: IMedia;

  mediaType = MediaType;
  aggregatorType = AggregatorType;

  getGenres(media: IMedia): string[] {
    return media.aggregators?.find(x => x.type == AggregatorType.Kinopoisk)?.genres ?? []
  }

  getAggregator(media: IMedia, type: AggregatorType): IMediaPlatform | null | undefined {
    return media.aggregators?.find(x => x.type == type);
  }

  playInVLC() {
  if (!this.media.filePath) {
    console.error('File path not specified');
    return;
  }

  // Проверяем платформу
  if (this.isWindows()) {
    this.launchVlcWindows();
  } else {
    this.fallbackToFileOpen();
  }
}

private isWindows(): boolean {
  return navigator.platform.includes('Win');
}

private launchVlcWindows() {
  const filePath = this.formatWindowsPath(this.media.filePath!);
  
  // Пробуем два варианта для Windows
  const vlcPaths = [
    `vlc://${filePath}`,
    `file:///${filePath}`
  ];

  let success = false;
  vlcPaths.forEach(url => {
    const link = document.createElement('a');
    link.href = url;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    success = true;
  });

  if (!success) {
    this.showVlcError();
  }
}

private formatWindowsPath(path: string): string {
  return path
    .replace(/\\/g, '/')
    .replace(/ /g, '%20')
    .replace(/'/g, '%27');
}

private fallbackToFileOpen() {
  // Для других ОС или если VLC не зарегистрирован
  if (confirm('Не удалось открыть в VLC. Хотите открыть расположение файла?')) {
    const folderPath = this.media.filePath!.split('/').slice(0, -1).join('/');
    window.open(`file:///${folderPath}`, '_blank');
  }
}

private showVlcError() {
  alert(`Не удалось запустить VLC. Убедитесь что:
1. VLC установлен
2. Протокол vlc:// зарегистрирован
3. Путь доступен: ${this.media.filePath}`);
}
}