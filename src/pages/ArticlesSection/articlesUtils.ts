import type { Article } from './ArticlesSectionData';

const monthIndex: Record<string, number> = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

function getArticleDate(article: Article): number | undefined {
    const month = article.month ? monthIndex[article.month] : undefined;
    const year = Number(article.year);
    const day = Number(article.day);

    if (
        month === undefined ||
        !Number.isInteger(year) ||
        !Number.isInteger(day) ||
        day < 1 ||
        day > 31
    ) {
        return undefined;
    }

    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day
        ? date.getTime()
        : undefined;
}

export function sortArticlesByDate(articles: Article[]): Article[] {
    return [...articles].sort((a, b) => {
        const dateA = getArticleDate(a);
        const dateB = getArticleDate(b);
        if (dateA === undefined) return dateB === undefined ? 0 : 1;
        if (dateB === undefined) return -1;
        return dateB - dateA;
    });
}

export function groupArticlesByYear(articles: Article[]) {
    const byYear = new Map<string, Article[]>();
    for (const article of articles) {
        const year = article.year ?? 'Undated';
        byYear.set(year, [...(byYear.get(year) ?? []), article]);
    }
    return [...byYear].sort(([yearA], [yearB]) => {
        // Sort by year descending (most recent first)
        if (yearA === 'Undated') return 1;
        if (yearB === 'Undated') return -1;
        return Number(yearB) - Number(yearA);
    }).map(([year, items]) => ({ year, articles: items }));
}
