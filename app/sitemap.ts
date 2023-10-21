import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl ='https://aziz-jenhani.github.io'
    return [
        {
            url:baseUrl,
            lastModified: new Date(),
            
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            
        },
        {
            url: `${baseUrl}/project`,
            lastModified: new Date(),
            
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            
        },
    ]
}