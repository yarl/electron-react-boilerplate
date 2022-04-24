import simpleThumbnail from 'simple-thumbnail';
import * as path from 'path';

async function generateThumbnail(filePath: string): Promise<string> {
  const buffer: Array<number> = [];

  const ffmpegPath = path.join(__dirname, '../node_modules/ffmpeg-static/ffmpeg');
  const stream = await simpleThumbnail(filePath, null, '450x?', { path: ffmpegPath });

  return new Promise((resolve) => {
    stream.on('data', (data: Array<number>) => buffer.push(...data));
    stream.on('end', () => {
      const base64Text = Buffer.from(buffer).toString('base64');
      resolve(base64Text ? `data:image/jpeg;base64,${base64Text}` : '');
    });
  });
}

export default generateThumbnail;
