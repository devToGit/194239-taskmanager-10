import {craeteSiteMenuTemplate} from './components/site-menu';
import {craeteSiteFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreButtonTemplate} from './components/load-more-button';

const TASK_COUNT = 3;
const renderSiteElements = (container, template, position = `beforeend`) => {
  return (container.insertAdjacentHTML(position, template));
};
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);


renderSiteElements(siteHeaderElement, craeteSiteMenuTemplate());
renderSiteElements(siteMainElement, craeteSiteFilterTemplate());
renderSiteElements(siteMainElement, createBoardTemplate());


const taskListElement = siteMainElement.querySelector(`.board__tasks`);

renderSiteElements(taskListElement, createTaskEditTemplate());

new Array(TASK_COUNT).fill(``).forEach(() =>
  renderSiteElements(taskListElement, createTaskTemplate())
);

const boardElement = siteMainElement.querySelector(`.board`);

renderSiteElements(boardElement, createLoadMoreButtonTemplate());

