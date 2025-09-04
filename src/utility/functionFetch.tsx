export async function LeaderboardFetch(URLfetch: string) {
  return fetch(URLfetch)
    .then((res) => res.json())
    .then((data) => data);
}

export async function CheckIfUserExsiss(
  userName: string,
  password: string
): Promise<string> {
  try {
    const response = await fetch("http://localhost:9076/api/players/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    const data = await response.json();

    if (response.ok) {
      return "Good Connction" + data.message;
    } else {
      return "Erorr" + data.error;
    }
  } catch (err) {
    return "Filud to conect to server" + err;
  }
}

export async function GetRiddles() {
  const res = await fetch("http://localhost:9076/api/riddles/show");
  if (!res.ok) throw new Error("Failed to fetch riddles");
  const json = await res.json();
  return json.data ?? [];
}
