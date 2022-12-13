import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
    const filtered = articles.filter(article => article.id === id)

    if (filtered) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `No articles found on id ${id}` })
    }
}