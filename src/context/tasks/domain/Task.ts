import Action from "./Action";
import Type from "./Type";

export class Task {
  readonly id: string;
  readonly user: string;
  readonly crop: string;
  readonly sensor: string;
  readonly action: Action;
  readonly type: Type;
  readonly pattern: string;

  constructor({
    id,
    user,
    crop,
    sensor,
    action,
    type,
    pattern,
  }: {
    id: string;
    user: string;
    crop: string;
    sensor: string;
    action: Action;
    type: Type;
    pattern: string;
  }) {
    this.id = id;
    this.user = user;
    this.crop = crop;
    this.sensor = sensor;
    this.action = action;
    this.type = type;
    this.pattern = pattern;
  }
}
