import type { Project } from './ProjectsSectionData';

const monthIndex: Record<string, number> = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

/**
 * Ordena do mais recente para o mais antigo (ano e depois mês).
 * Projetos sem mês vêm depois dos que têm mês no mesmo ano; empates mantêm a ordem dos dados.
 */
export const sortProjectsByDate = (projects: Project[]): Project[] =>
    [...projects].sort(
        (a, b) =>
            Number(b.year ?? 0) - Number(a.year ?? 0) ||
            (monthIndex[b.month ?? ''] ?? -1) - (monthIndex[a.month ?? ''] ?? -1)
    );

/** Agrupa por ano preservando a ordem da lista recebida (use após sortProjectsByDate). */
export const groupProjectsByYear = (projects: Project[]) => {
    const byYear = new Map<string, Project[]>();
    for (const project of projects) {
        const year = project.year ?? 'Undated';
        byYear.set(year, [...(byYear.get(year) ?? []), project]);
    }
    return [...byYear].map(([year, items]) => ({ year, projects: items }));
};
