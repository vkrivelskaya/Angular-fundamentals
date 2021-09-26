import { Course } from '../models/course';

export const Courses: Course[] = [
  {
    title: 'Angular',
    creationDate: new Date('2012-03-20'),
    duration: 524,
    description:
      'Quis eleifend quam adipiscing vitae proin. Vestibulum sed arcu non odio euismod lacinia at quis. ' +
      'Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Mattis aliquam faucibus purus in ' +
      'massa tempor. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. ',
    authors: ['author1', 'author2', 'author3'],
    editable: true
  },
  {
    title: 'Java',
    creationDate: new Date('2019-11-18'),
    duration: 135,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit amet nisl. Egestas sed ' +
      'sed risus pretium. Mi bibendum neque egestas congue quisque egestas diam in arcu.',
    authors: ['author1', 'author2'],
    editable: false
  },
  {
    title: 'JavaScript',
    creationDate: new Date('2020-06-11'),
    duration: 400,
    description:
      'Tortor dignissim convallis aenean et tortor at risus viverra. ' +
      'Arcu ac tortor dignissim convallis aenean et tortor at. Id leo in ' +
      'vitae turpis massa sed elementum.Tortor dignissim convallis aenean ' +
      'et tortor at risus viverra. Arcu ac tortor dignissim convallis aenean ' +
      'et tortor at. Id leo in vitae turpis massa sed elementum.',
    authors: ['author1', 'author2', 'author3'],
    editable: false
  },
  {
    title: 'ASP .NET',
    creationDate: new Date('2021-06-11'),
    duration: 45,
    description:
      'Tortor dignissim convallis aenean et tortor at risus viverra. ' +
      'Arcu ac tortor dignissim convallis aenean et tortor at. Id leo in ' +
      'vitae turpis massa sed elementum.Tortor dignissim convallis aenean ' +
      'et tortor at risus viverra. Arcu ac tortor dignissim convallis aenean ' +
      'et tortor at. Id leo in vitae turpis massa sed elementum.',
    authors: ['author1', 'author2'],
    editable: true
  },
  {
    title: 'Angular',
    creationDate: new Date('2021-11-11'),
    duration: 85,
    description:
      'Tortor dignissim convallis aenean et tortor at risus viverra. ' +
      'Arcu ac tortor dignissim convallis aenean et tortor at. Id leo in ' +
      'vitae turpis massa sed elementum.Tortor dignissim convallis aenean ' +
      'et tortor at risus viverra. Arcu ac tortor dignissim convallis aenean ' +
      'et tortor at. Id leo in vitae turpis massa sed elementum.',
    authors: ['author1', 'author2'],
    editable: false
  }
];
