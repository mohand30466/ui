export class Api {
  static Regester(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static Getusers() {
    return fetch(
      `https://mohanproject.herokuapp.com/api/users/`,
      {}
    ).then((res) => res.json());
  }
  static Getuser(user) {
    return fetch(
      `https://mohanproject.herokuapp.com/api/users/${user}`,
      {}
    ).then((res) => res.json());
  }
  static Login(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static UpdateUserProfile(id,data) {
    return fetch(`https://mohanproject.herokuapp.com/api/profile/${id}/`, {
      method: "PUT",
      body: data,
    }).then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static GetProfile() {
    return fetch(`https://mohanproject.herokuapp.com/api/profile/`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static GetMyProfile(data) {
    return fetch(`https://mohanproject.herokuapp.com/api/profile/${data}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static ChangePassword(body, id) {
    return fetch(`http://127.0.0.1:8000/users/${id}/ChangePass/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static GetBosts() {
    return fetch(`https://mohanproject.herokuapp.com/api/posts/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  static Bost(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/posts/`, {
      method: "POST",
      body: body,
    }).then((res) => res.json());
  }
  static Contact_Us(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/contactus/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static Sendlikes(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/like/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  
  static SendAplications(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/poke/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

 
  static Messages(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/message/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static GetMessages() {
    return fetch(
      `https://mohanproject.herokuapp.com/api/message/`,
      {}
    ).then((res) => res.json());
  }

  static SendMessage(body) {
    return fetch(`http://127.0.0.1:8000/message/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static Gbussiness(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/bussines/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static GetBussiness() {
    return fetch(`https://mohanproject.herokuapp.com/api/bussines/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  static GManagers(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/manager/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static GStaff(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/staff/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static GetStaff() {
    return fetch(`https://mohanproject.herokuapp.com/api/staff/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  static GetSingleStaff(id) {
    return fetch(`https://mohanproject.herokuapp.com/api/staff/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  static GShift(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/shift/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static GetShift() {
    return fetch(`https://mohanproject.herokuapp.com/api/shift/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  static StaffCard(body) {
    return fetch(`https://mohanproject.herokuapp.com/api/card/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
  static GetStaffCard() {
    return fetch(`https://mohanproject.herokuapp.com/api/card/`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
  static PlogPost(data) {
    return fetch(`https://mohanproject.herokuapp.com/api/plogPost/`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  static GetPlogPost() {
    return fetch(`https://mohanproject.herokuapp.com/api/plogPost/`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  




}
