import type { Project } from '../pages/ProjectsSection/ProjectsSectionData';
import type { Article } from '../pages/ArticlesSection/ArticlesSectionData';

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1'
).replace(/\/+$/, '');

export interface Experience {
  id: string;
  title: string;
  func: string;
  period: string;
  description: string;
  tags: string[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

async function requestData(path: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  let payload: unknown;

  try {
    payload = await response.json();
  } catch (cause) {
    if (!response.ok) {
      throw new Error(`A API respondeu com HTTP ${response.status}.`, { cause });
    }
    throw new Error('A API retornou uma resposta JSON inválida.', { cause });
  }

  if (!response.ok) {
    const message =
      isRecord(payload) && typeof payload.message === 'string'
        ? payload.message
        : `A API respondeu com HTTP ${response.status}.`;
    throw new Error(message);
  }

  if (!isRecord(payload) || !('data' in payload)) {
    throw new Error('A resposta da API não contém o campo "data".');
  }

  return payload.data;
}

function isProject(value: unknown): value is Project {
  return (
    isRecord(value) &&
    typeof value.title === 'string' &&
    (value.description === undefined || typeof value.description === 'string') &&
    (value.text === undefined || typeof value.text === 'string') &&
    (value.year === undefined || typeof value.year === 'string') &&
    (value.link === undefined || typeof value.link === 'string') &&
    (value.tags === undefined || isStringArray(value.tags)) &&
    (value.id === undefined || typeof value.id === 'string') &&
    (value.month === undefined || typeof value.month === 'string') &&
    (value.icon === undefined || typeof value.icon === 'string')
  );
}

function isExperience(value: unknown): value is Experience {
  return (
    isRecord(value) &&
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.func === 'string' &&
    typeof value.period === 'string' &&
    typeof value.description === 'string' &&
    isStringArray(value.tags)
  );
}

function isArticle(value: unknown): value is Article {
  return (
    isRecord(value) &&
    typeof value.title === 'string' &&
    (value.id === undefined || typeof value.id === 'string') &&
    (value.description === undefined || typeof value.description === 'string') &&
    (value.text === undefined || typeof value.text === 'string') &&
    (value.year === undefined || typeof value.year === 'string') &&
    (value.month === undefined || typeof value.month === 'string') &&
    (value.day === undefined || typeof value.day === 'string') &&
    (value.link === undefined || typeof value.link === 'string') &&
    (value.tags === undefined || isStringArray(value.tags)) &&
    (value.icon === undefined || typeof value.icon === 'string')
  );
}

export async function fetchPublicProjects(): Promise<Project[]> {
  const data = await requestData('/public_projects');
  if (!Array.isArray(data) || !data.every(isProject)) {
    throw new Error('A API retornou dados de projetos em formato inválido.');
  }
  return data;
}

export async function fetchPublicProjectByName(name: string): Promise<Project | null> {
  const query = new URLSearchParams({ name });
  const data = await requestData(`/public_projects?${query.toString()}`);
  if (!Array.isArray(data) || !data.every(isProject)) {
    throw new Error('A API retornou dados de projetos em formato inválido.');
  }
  return data[0] ?? null;
}

export async function fetchArticles(): Promise<Article[]> {
  const data = await requestData('/articles');
  if (!Array.isArray(data) || !data.every(isArticle)) {
    throw new Error('A API retornou dados de artigos em formato inválido.');
  }
  return data;
}

export async function fetchArticleByName(name: string): Promise<Article | null> {
  const query = new URLSearchParams({ name });
  const data = await requestData(`/articles?${query.toString()}`);
  if (!Array.isArray(data) || !data.every(isArticle)) {
    throw new Error('A API retornou dados de artigos em formato inválido.');
  }
  return data[0] ?? null;
}

export async function fetchExperiences(): Promise<Experience[]> {
  const data = await requestData('/experiences');
  if (!Array.isArray(data) || !data.every(isExperience)) {
    throw new Error('A API retornou dados de experiências em formato inválido.');
  }
  return data;
}
