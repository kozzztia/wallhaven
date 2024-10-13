import {links} from './consts';

export function findCurrentColor(pathname) {
    const link = links.find(link => link.href === pathname);
    return link ? link.color : 'black'; // Устанавливаем черный цвет по умолчанию, если путь не найден
}