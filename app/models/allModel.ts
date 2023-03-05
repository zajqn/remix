import React from 'react';

export interface MenuProps {
  icon: React.ReactNode,
  color: string;
  label: string;
  link: string;
}

export interface MenuProps2 {
  color: string;
  label: string;
}

export interface BreadcrumbsModel {
  name: string,
  path: string,
}