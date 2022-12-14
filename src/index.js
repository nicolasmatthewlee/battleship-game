import { Gameboard } from './Gameboard';
import { Ship } from './Ship';
import { Model } from './Model';
import { View } from './View';
import { Controller } from './Controller';

const app = new Controller(new Model(), new View());
