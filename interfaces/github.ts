export interface Project {
  created_at: string,
  description: string,
  homepage: string,
  html_url: string,
  language: string,
  license: License,
  name: string,
  owner: User,
  updated_at: string
}

export interface License {
  key: string,
  name: string,
  spdx_id: string,
  url: string
}

export interface User {
  bio: string,
  blog: string,
  company: string,
  html_url: string,
  location: string,
  login: string,
  name: string
}