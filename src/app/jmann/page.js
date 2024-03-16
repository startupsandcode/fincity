"use client"
import styles from "../page.module.scss"
import { useState } from "react"

export default function Jmann() {
	const [postData, setPostData] = useState({ title: "My Starting Title", body: "My current body text" })

	async function callAPI() {
		try {
			const randomNumber = Math.floor(Math.random() * 10) + 1
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
			const data = await res.json()
			setPostData(data)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>{postData ? postData.title : "Loading..."}</h1>
				<content>{postData ? postData.body : "Loading..."}</content>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	)
}
