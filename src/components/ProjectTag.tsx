// Interfaces:
import { ProjectTagId } from '../../types/ProjectTag';

interface ProjectTagInterface {
  name: string;
  tag: ProjectTagId;
  on_click: (tag: string) => void;
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
      className={`${button_styles} max-sm:w-1/2 rounded-full border-2 px-6 py-3 text-xl`}
      onClick={() => on_click(tag)}
      aria-pressed={is_selected}
    >
      {name}
    </button>
  );
}
