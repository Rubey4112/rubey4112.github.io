import { asset } from '$app/paths';
import type { AssetPath } from '$app/types';

export function media(path: string) {
	return asset(path as AssetPath);
}
