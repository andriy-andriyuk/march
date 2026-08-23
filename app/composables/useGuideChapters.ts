export function useGuideChapters() {
  return useAsyncData('all-chapters-nav', () =>
    queryCollection('chapters')
      .select('path', 'title', 'chapter', 'part')
      .order('chapter', 'ASC')
      .all()
  )
}
