export class Feature {
  constructor(name, filename, hue = 0, brightness = 0, saturation = 0) {
    this.name = name;
    this.hue = hue;
    this.brightness = brightness;
    this.saturation = saturation;
    this.filename = filename;
  }
}