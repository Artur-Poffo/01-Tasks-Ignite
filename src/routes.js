import { randomUUID } from "node:crypto"
import { Database } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ? {title: search, description: search} : null )

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      if (req.body === null) {
        return res.writeHead(400).end(JSON.stringify({ message: 'title and description is required' }),)
      }

      const { title, description } = req.body

      if (!title || !description) {
        return res.writeHead(400).end(JSON.stringify({ message: 'title and description is required' }),)
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed: false,
        created_at: new Date(),
        updated_at: new Date(),
        completed_at: null
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      if (req.body === null) {
        return res.writeHead(400).end(JSON.stringify({ message: 'title and description is required' }),)
      }

      const { id } = req.params
      const { title, description } = req.body

      const [task] = database.select('tasks', { id })

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }))
      }

      if (!title || !description) {
        return res.writeHead(400).end(JSON.stringify({ message: 'title and description is required' }),)
      }

      database.update('tasks', id, { title, description, updated_at: new Date()})

      return res.writeHead(204).end()
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const [task] = database.select('tasks', { id })

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }))
      }

      database.delete('tasks', id)

      return res.writeHead(204).end()
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/completed'),
    handler: (req, res) => {
      const { id } = req.params

      const [task] = database.select('tasks', { id })

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }))
      }

      const taskIsCompleted = !task.completed

      database.update('tasks', id, {completed_at: new Date(), completed: taskIsCompleted})

      return res.writeHead(204).end()
    },
  }
]