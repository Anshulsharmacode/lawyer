"use client";

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
     event.preventDefault();
     const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch("/api", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }
  return (
    <div className="flex flex-col w-full items-center justify-center mb-6">
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-full lg:w-[70%] p-4 rounded-lg text-color-3 bg-color-1"
      >
        <div className="mb-4 flex flex-col w-500 text-color-4">
          <label htmlFor="form-name" className="mb-2">
            Name
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="p-2 mb-4 rounded-md text-color-5 bg-color-2"
          />
          <label htmlFor="form-name" className="mb-2">
            Phone*
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="phone"
            className="p-2 mb-4 rounded-md text-color-5 bg-color-2"
          />

          <label htmlFor="form-email" className="mb-2 text-color-4">
            Email
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="p-2 mb-4 rounded-md text-color-5 bg-color-2"
          />

          <label htmlFor="form-message" className="mb-2 text-color-4">
            Message
          </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="p-2 rounded-md text-color-5 bg-color-2"
          />
        </div>
        <button
          className="rounded p-2 text-color-2 font-semibold bg-color-5"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
