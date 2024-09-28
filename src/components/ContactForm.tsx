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
        className="mt-8 mb-2 w-full lg:w-[70%] p-6 rounded-lg text-gray-800 bg-white shadow-lg"
      >
        <div className="mb-6 flex flex-col w-full text-gray-700">
          <label htmlFor="form-name" className="mb-2 font-semibold">
            Name
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="p-3 mb-4 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="form-phone" className="mb-2 font-semibold">
            Phone*
          </label>
          <input
            id="form-phone"
            autoComplete="tel"
            maxLength={15}
            name="phone"
            className="p-3 mb-4 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="form-email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="p-3 mb-4 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="form-message" className="mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="p-3 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-full rounded p-3 text-white font-semibold bg-color-2 hover:bg-blue-700 transition-all duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
