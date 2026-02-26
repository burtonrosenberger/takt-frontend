/*
 * RWTH Aachen University
 * Copyright (C) 2026 Projekt ADAA
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

export function useDirectus() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.directusApiUrl as string

  const headers = {
    Authorization: `Bearer ${config.public.directusApiToken}`,
  }

  function assetUrl(uuid: string): string {
    return `${baseUrl}/assets/${uuid}`
  }

  async function fetchItems<T>(collection: string, params: string = ''): Promise<T> {
    return $fetch(`${baseUrl}/items/${collection}${params}`, { headers })
  }

  async function postItem<T>(collection: string, body: Record<string, unknown>): Promise<T> {
    return $fetch(`${baseUrl}/items/${collection}`, {
      method: 'POST',
      body,
      headers,
    })
  }

  return { baseUrl, headers, assetUrl, fetchItems, postItem }
}
