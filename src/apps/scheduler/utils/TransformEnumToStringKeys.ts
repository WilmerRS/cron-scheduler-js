export class TransformEnumToStringKeysArray {
  static transform(obj: any): string[] {
    return Object.keys(obj);
  }
}
