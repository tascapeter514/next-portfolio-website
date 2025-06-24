import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {

    const [matches, setMatches] = useState(false)

    console.log('is medium query:', query)

    useEffect(() => {
        const media = window.matchMedia(query)

        console.log('is medium media:', media)


        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)

    }, [matches, query])

    return matches
}

export default useMediaQuery