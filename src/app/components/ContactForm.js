'use client';
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';  // Import Shadcn Dialog components
import { Button } from '@/components/ui/button';  // Import Button component
import { Input } from '@/components/ui/input';    // Import Input component
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';  // Import Shadcn Select components
import { Textarea } from '@/components/ui/textarea';  // Import Textarea component

const ContactForm = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    carMakeModel: '',
    engineCapacity: '',
    mileage: '',
    expectedPrice: '',
    productionYear: '',
    fuelType: '',
    carType: '',
    message: '',
    files: [],  // Changed to an array to store multiple files
  });

  // Handle change for form fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: Array.from(files),  // Convert file list to an array
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    closeModal();  // Close modal after form submission
    // Add additional logic to send the form data if necessary (including the files)
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? setIsOpen(true) : closeModal()}>
      {/* Trigger to open the dialog */}
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Otwórz formularz</Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Kontakt</DialogTitle>
          <DialogDescription>
            Wypełnij formularz, aby skontaktować się z nami.
          </DialogDescription>
        </DialogHeader>

        {/* Form starts here */}
        <form
          action="send_email.php"  // Set the action to send email data to the server
          method="POST"           // Define the method as POST
          id="contact-form"
          encType="multipart/form-data"  // Important for file upload
          onSubmit={handleSubmit}  // Handle submit in React (could be customized as needed)
        >
          <div className="mb-4">
            <Input
              name="name"
              placeholder="Imię i nazwisko"
              value={formData.name}
              onChange={handleChange}
              required
              label="Imię i nazwisko"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Twój Email"
              value={formData.email}
              onChange={handleChange}
              required
              label="Email"
            />
          </div>
          <div className="mb-4">
            <Input
              type="tel"
              name="phone"
              placeholder="Numer Telefonu"
              value={formData.phone}
              onChange={handleChange}
              required
              label="Telefon"
            />
          </div>
          <div className="mb-4">
            <Input
              name="city"
              placeholder="Miasto"
              value={formData.city}
              onChange={handleChange}
              required
              label="Miasto"
            />
          </div>
          <div className="mb-4">
            <Input
              name="carMakeModel"
              placeholder="Marka i model samochodu"
              value={formData.carMakeModel}
              onChange={handleChange}
              required
              label="Marka i model"
            />
          </div>
          <div className="mb-4">
            <Input
              name="engineCapacity"
              placeholder="Pojemność silnika (cm³)"
              value={formData.engineCapacity}
              onChange={handleChange}
              required
              label="Pojemność silnika (cm³)"
            />
          </div>
          <div className="mb-4">
            <Input
              name="mileage"
              placeholder="Przebieg (km)"
              value={formData.mileage}
              onChange={handleChange}
              required
              label="Przebieg (km)"
            />
          </div>
          <div className="mb-4">
            <Input
              name="expectedPrice"
              placeholder="Oczekiwana cena (PLN)"
              value={formData.expectedPrice}
              onChange={handleChange}
              required
              label="Oczekiwana cena (PLN)"
            />
          </div>
          <div className="mb-4">
            <Input
              type="number"
              name="productionYear"
              placeholder="Rok produkcji"
              value={formData.productionYear}
              onChange={handleChange}
              required
              label="Rok produkcji"
            />
          </div>
          <div className="mb-4">
            <Select value={formData.fuelType} onValueChange={(value) => setFormData({ ...formData, fuelType: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Rodzaj paliwa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Benzyna">Benzyna</SelectItem>
                <SelectItem value="Benzyna + LPG">Benzyna + LPG</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Hybryda">Hybryda</SelectItem>
                <SelectItem value="Elektryczny">Elektryczny</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Select value={formData.carType} onValueChange={(value) => setFormData({ ...formData, carType: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Rodzaj auta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sedan">Sedan</SelectItem>
                <SelectItem value="Kombi">Kombi</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Hatchback">Hatchback</SelectItem>
                <SelectItem value="Coupe">Coupe</SelectItem>
                <SelectItem value="Bus">Bus</SelectItem>
                <SelectItem value="Ciężarowy">Ciężarowy</SelectItem>
                <SelectItem value="Inny">Inny</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* File Upload */}
          <div className="mb-4">
            <Input
              type="file"
              name="files"
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf,.docx" // You can specify allowed file types
              multiple  // This allows multiple file selection
              label="Załącz pliki"
            />
            {/* Displaying selected files */}
            {formData.files.length > 0 && (
              <div className="mt-2">
                <h4>Wybrane pliki:</h4>
                <ul>
                  {formData.files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mb-4">
            <Textarea
              name="message"
              placeholder="Dodatkowe informacje"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              label="Dodatkowe informacje"
            />
          </div>

          {/* Dialog Footer - Close and Submit buttons */}
          <DialogFooter>
            <Button variant="outline" onClick={closeModal}>Zamknij</Button>
            <Button type="submit">Wyślij</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
