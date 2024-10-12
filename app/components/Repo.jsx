import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
// import Link from 'next/link';

// fetch the individual basic repo data from the GitHub API
async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`)
  const repo = await response.json()
  return repo
}

// get name from the URL parameter
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  // console.log(repo)
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  )
}
export default Repo
