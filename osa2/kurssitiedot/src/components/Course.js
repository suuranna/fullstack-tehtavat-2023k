const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.map(part => part.exercises).reduce((accumulator, current) => accumulator + current)
  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}/>
      <Content course={props.course} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course