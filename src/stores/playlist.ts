import { defineStore } from 'pinia'

import axios from 'axios'
import type { Result, PlaylistResponse } from '../types/playlist'

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    playlists: [] as Result[],
    search: '',
    limit: 10,
    loading: false
  }),
  getters: {
    getPlaylists(state) {
      return state.playlists
    },
    getSearch(state) {
      return state.search
    },
    isLoading(state) {
      return state.loading
    }
  },
  actions: {
    async fetchPlaylist(filterParams: Record<string, string | number> = {}): Promise<boolean> {
      this.loading = true
      this.search = filterParams.term as string
      try {
        const response = await axios.get<PlaylistResponse>('/api', {
          params: filterParams
        })
        this.playlists = response.data.results
        this.limit = response.data.resultCount
        this.loading = false
        return true
      } catch (error) {
        alert(error)
        console.log(error)
        return false
      }
    }
  }
})
