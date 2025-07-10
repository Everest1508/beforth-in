Here's the fixed version with the missing closing brackets and parentheses:

```javascript
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Bottom Footer */}
            <motion.div 
              className="border-t border-border pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Security</a>
                  <a href="#" className="hover:text-primary transition-colors">Compliance</a>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>&copy; 2024 Beforth. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </footer>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={closeModal}
            service={selectedService}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
```