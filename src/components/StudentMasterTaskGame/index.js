import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import AnswerItem from '../AnswerItem'

class StudentMasterTaskGame extends Component {
  state = {
    masterName: '',
    masterSubject: '',
    masterNameErr: false,
    masterSubjectErr: false,
    isVisibleMasterLogIn: true,
    studentName: '',
    studentRollNo: '',
    studentNameErr: false,
    studentRollNoErr: false,
    isVisibleStudentLogIn: true,
    questionIs: '',
    questionsList: [],
  }

  onLogoutMaster = () => {
    this.setState({
      isVisibleMasterLogIn: true,
      masterName: '',
      masterSubject: '',
    })
  }

  onLogoutStudent = () => {
    this.setState({
      isVisibleStudentLogIn: true,
      studentName: '',
      studentRollNo: '',
    })
    console.log('student logout')
  }

  onChangeQuestion = event => {
    this.setState({questionIs: event.target.value})
  }

  onChangeMasterName = event => {
    this.setState({masterName: event.target.value})
  }

  onChangeSubjectName = event => {
    this.setState({masterSubject: event.target.value})
  }

  onBlurMasterName = () => {
    const {masterName} = this.state
    if (masterName === '') {
      this.setState({masterNameErr: true})
    }
  }

  onBlurSubjectName = () => {
    const {masterSubject} = this.state
    if (masterSubject === '') {
      this.setState({masterSubjectErr: true})
    }
  }

  onChangeStudentName = event => {
    this.setState({studentName: event.target.value})
  }

  onChangeRollNo = event => {
    this.setState({studentRollNo: event.target.value})
  }

  onBlurStudentName = () => {
    const {studentName} = this.state
    if (studentName === '') {
      this.setState({studentNameErr: true})
    }
  }

  onBlurRollNo = () => {
    const {studentRollNo} = this.state
    if (studentRollNo === '') {
      this.setState({studentRollNoErr: true})
    }
  }

  onSubmitMasterLogInData = event => {
    const {masterName, masterSubject} = this.state
    event.preventDefault()
    if (masterName === '' && masterSubject === '') {
      this.setState({
        masterNameErr: true,
        masterSubjectErr: true,
      })
    } else {
      this.setState({isVisibleMasterLogIn: false})
    }
  }

  onSubmitStudentLogInData = event => {
    const {studentName, studentRollNo} = this.state
    event.preventDefault()
    if (studentName === '' && studentRollNo === '') {
      this.setState({
        studentNameErr: true,
        studentRollNoErr: true,
      })
    } else {
      this.setState({isVisibleStudentLogIn: false})
    }
  }

  onClickMasterAskingQuestion = event => {
    event.preventDefault()
    const {questionIs, questionsList} = this.state
    const newQuestion = {
      id: uuidv4(),
      questionI: questionIs,
    }
    console.log(questionIs)
    this.setState({
      questionsList: [...questionsList, newQuestion],
      questionIs: '',
    })
  }

  onClickAnswersQuestionsListIs = answer => {
    this.setState({answerIs: answer})
  }

  renderMasterContainerIs() {
    const {
      masterNameErr,
      masterSubjectErr,
      masterName,
      masterSubject,
    } = this.state
    return (
      <div className="master-container">
        <h1 className="master-heading">Log In - Master</h1>
        <form
          className="master-form-container"
          onSubmit={this.onSubmitMasterLogInData}
        >
          <label htmlFor="masterName" className="label">
            Enter Your Name
          </label>
          <br />
          <input
            type="text"
            id="masterName"
            value={masterName}
            className="master-name-input"
            placeholder="Enter Your Name"
            onChange={this.onChangeMasterName}
            onBlur={this.onBlurMasterName}
          />
          {masterNameErr && <p className="error">*Please Enter Name Field</p>}

          <br />
          <label htmlFor="masterSubjectName" className="label">
            Enter Your Subject Name
          </label>
          <br />
          <input
            type="text"
            id="masterSubjectName"
            value={masterSubject}
            className="master-name-input"
            placeholder="Enter Your Subject Name"
            onChange={this.onChangeSubjectName}
            onBlur={this.onBlurSubjectName}
          />
          {masterSubjectErr && (
            <p className="error">*Please Enter Subject Field</p>
          )}
          <br />
          <button type="submit" className="button">
            Log In
          </button>
        </form>
      </div>
    )
  }

  renderStudentContainerIs() {
    const {
      studentNameErr,
      studentRollNoErr,
      studentName,
      studentRollNo,
    } = this.state
    return (
      <div className="student-container">
        <h1 className="master-heading">Log In - Student</h1>
        <form
          className="master-form-container"
          onSubmit={this.onSubmitStudentLogInData}
        >
          <label htmlFor="studentName" className="label">
            Enter Student Name
          </label>
          <br />
          <input
            type="text"
            id="studentName"
            value={studentName}
            className="master-name-input"
            placeholder="Enter Student Name"
            onChange={this.onChangeStudentName}
            onBlur={this.onBlurStudentName}
          />
          {studentNameErr && <p className="error">*Please Enter Name Field</p>}

          <br />
          <label htmlFor="masterSubjectName" className="label">
            Enter Your Roll No
          </label>
          <br />
          <input
            type="text"
            id="masterSubjectName"
            value={studentRollNo}
            className="master-name-input"
            placeholder="Enter Your Roll No"
            onChange={this.onChangeRollNo}
            onBlur={this.onBlurRollNo}
          />
          {studentRollNoErr && <p className="error">*Please Enter Roll No</p>}
          <label htmlFor="masterSubjectName" className="label">
            Enter Your Class & Section (Optional)
          </label>
          <br />
          <input
            type="text"
            id="masterSubjectNameIs"
            className="master-name-input"
            placeholder="Enter Your Class & Section"
          />
          <br />
          <button type="submit" className="button">
            Log In
          </button>
        </form>
      </div>
    )
  }

  renderAfterMasterLogIn() {
    const {masterName, masterSubject, questionIs, questionsList} = this.state

    return (
      <div className="master-login-container">
        <button
          type="button-"
          className="log-out-button-two"
          onClick={this.onLogoutMaster}
        >
          Logout
        </button>
        <h1 className="master-login-heading">
          Welcome to{' '}
          <span className="master-heading-span">You tell,I do Task </span>
          <span className="master-heading-span">{masterName}</span>( Master)
        </h1>
        <div className="master-questions-container">
          <h1 className="master-login-desc">
            Im going to ask few mathematical questions
          </h1>
          <form
            className="master-question-form-container"
            onSubmit={this.onClickMasterAskingQuestion}
          >
            <label htmlFor="question" className="label">
              The Question Is....
            </label>
            <input
              type="text"
              className="master-name-input"
              value={questionIs}
              onChange={this.onChangeQuestion}
            />
            <button type="submit" className="button-two">
              Click Ask Question to Student
            </button>
          </form>
        </div>
      </div>
    )
  }

  renderAfterStudentLogIn() {
    const {studentName, studentRollNo, questionsList, questionIs} = this.state
    return (
      <div className="student-after-login-container">
        <button
          type="button"
          className="log-out-button-two"
          onClick={this.onLogoutStudent}
        >
          Logout
        </button>
        <h1 className="student-after-login-heading">
          Welcome to{' '}
          <span className="master-heading-span">You tell,I do Task</span> Mr.
          <span className="master-heading-span">{studentName}</span>(Student) &
          Roll No is{' '}
          <span className="master-heading-span">{studentRollNo}</span>
        </h1>
        <div className="answers-list-is">
          <h1 className="master-heading-span">Activity Log:</h1>
          <ul className="answers-un-order-container">
            {questionsList.map(eachQ => (
              <AnswerItem
                questionDetails={eachQ}
                key={eachQ.id}
                onClickCurrentAnswerIs={this.onClickCurrentAnswerIs}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isVisibleMasterLogIn, isVisibleStudentLogIn} = this.state
    return (
      <div className="game-container">
        <h1 className="game-heading">
          Master & Student TaskGame - You tell,I do
        </h1>
        <div className="master-student-container">
          <div className="master-container">
            {isVisibleMasterLogIn
              ? this.renderMasterContainerIs()
              : this.renderAfterMasterLogIn()}
          </div>
          <div className="student-container">
            {isVisibleStudentLogIn
              ? this.renderStudentContainerIs()
              : this.renderAfterStudentLogIn()}
          </div>
        </div>
      </div>
    )
  }
}
export default StudentMasterTaskGame