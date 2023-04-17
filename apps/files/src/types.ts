/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */
import type { Folder } from '@nextcloud/files'
import type { Node } from '@nextcloud/files'

// Global definitions
export type Service = string
export type FileId = number

// Files store
export type FilesState = {
	files: FilesStore,
	roots: RootsStore,
}

export type FilesStore = {
	[fileid: FileId]: Node
}

export type RootsStore = {
	[service: Service]: Folder
}

export interface RootOptions {
	root: Folder
	service: Service
}

// Paths store
export type ServicesState = {
	[service: Service]: PathsStore
}

export type PathsStore = {
	[path: string]: number
}

export interface PathOptions {
	service: Service
	path: string
	fileid: FileId
}

// Sorting store
export type direction = 'asc' | 'desc'

export interface SortingConfig {
	mode: string
	direction: direction
}

export interface SortingStore {
	[key: string]: SortingConfig
}

// User config store
export interface UserConfig {
	[key: string]: boolean
}
export interface UserConfigStore {
	userConfig: UserConfig
}

export interface SelectionStore {
	selected: FileId[]
	lastSelection: FileId[]
	lastSelectedIndex: number | null
}

// Actions menu store
export type GlobalActions = 'global'
export interface ActionsMenuStore {
	opened: GlobalActions|string|null
}
