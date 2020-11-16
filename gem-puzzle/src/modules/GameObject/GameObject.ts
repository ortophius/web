import Events from '../Events/Events';

export default interface GameObject extends Events {
  zIndex: number;
  display: boolean;
  children: GameObject[];
}
