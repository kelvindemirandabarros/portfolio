import React from 'react';

interface ProjectTagInterface {
  name: string;
  tag: string;
  on_click: Function;
  is_selected: boolean;
}

export function ProjectTag({
  name,
  tag,
  on_click,
  is_selected
}: ProjectTagInterface) {
  const button_styles = is_selected
    ? 'text-white border-primary-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${button_styles} maxw639:w-1/2 rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => on_click(tag)}
    >
      {name}
    </button>
  );
}
